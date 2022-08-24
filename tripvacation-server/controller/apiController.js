// const Traveler = require('../models/Booking');
const Treasure = require('../models/Activity');
const Item = require('../models/Item');
const Category = require('../models/Category');
const Bank = require('../models/Bank');
const Member = require('../models/Member');
const Booking = require('../models/Booking');
module.exports = {
  landingPage: async (req, res) => {
    try {
      const member = await Member.find();
      const treasure = await Treasure.find();
      const city = await Item.find();
      const mostPicked = await Item.find()
        .select('_id title country city unit price imageId')
        .limit(5)
        .populate({ path: 'imageId', select: '_id imageUrl' });

      const category = await Category.find()
        .select('_id name')
        .limit(3)
        .populate({
          path: 'itemId',
          select: '_id title country city isPopular imageId',
          perDocumentLimit: 4,
          option: {
            sort: { sumBooking: -1 },
          },
          populate: {
            path: 'imageId',
            select: '_id imageUrl',
            perDocumentLimit: 1,
          },
        });
      const testimonial = {
        imageUrl: 'images/img-testi-home.jpg',
        name: 'Couple Trip',
        rate: 4.7,
        content:
          'What a great trip with my souls and i should try again next time....',
        familyName: 'Abdul',
        familyOccupation: 'Front-End Web Developer',
      };
      for (let i = 0; i < category.length; i++) {
        for (let x = 0; x < category[i].itemId.length; x++) {
          const item = await Item.findOne({ _id: category[i].itemId[x]._id });
          item.isPopular = false;
          await item.save();
          if (category[i].itemId[0] === category[i].itemId[x]) {
            item.isPopular = true;
            await item.save();
          }
        }
      }
      res.status(200).json({
        hero: {
          travelers: member.length,
          treasures: treasure.length,
          cities: city.length,
        },
        mostPicked,
        category,
        testimonial,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const itemDetail = await Item.findOne({ _id: id })
        .populate({ path: 'imageId', select: '_id imageUrl' })
        .populate({ path: 'featuredId', select: '_id qty name imageUrl' })
        .populate({ path: 'activityId', select: '_id name type imageUrl' });

      const bank = await Bank.find();
      const testimonial = {
        imageUrl: 'images/img-testi-detail.jpg',
        name: 'Couple Trip',
        rate: 4.7,
        content:
          'What a great trip with my souls and i should try again next time....',
        familyName: 'Abdul',
        familyOccupation: 'Front-End Web Developer',
      };
      res.status(200).json({
        ...itemDetail._doc,
        bank,
        testimonial,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  bookingPage: async (req, res) => {
    try {
      const {
        itemId,
        duration,
        bookingStartDate,
        bookingEndDate,
        firstName,
        lastName,
        email,
        phoneNumber,
        bankFrom,
        accountHolder,
      } = req.body;
      if (!req.file) {
        return res.status(404).json({ message: 'Image Not Found!' });
      }
      if (
        itemId === undefined ||
        duration === undefined ||
        bookingStartDate === undefined ||
        bookingEndDate === undefined ||
        firstName === undefined ||
        lastName === undefined ||
        email === undefined ||
        phoneNumber === undefined ||
        bankFrom === undefined ||
        accountHolder === undefined
      ) {
        res.status(404).json({ message: 'Completed All Field' });
      }
      const item = await Item.findOne({ _id: itemId });
      if (!item) {
        return res.status(404).json({ message: 'Item Not Found!' });
      }
      item.sumBooking += 1;
      await item.save();
      let total = item.price * duration;
      let tax = total * 0.1;
      const invoice = Math.floor(1000000 + Math.random() * 9000000);

      const member = await Member.create({
        firstName,
        lastName,
        email,
        phoneNumber,
      });
      const newBooking = {
        invoice,
        bookingStartDate,
        bookingEndDate,
        total: (total += tax),
        itemId: {
          _id: item.id,
          title: item.title,
          price: item.price,
          duration: duration,
        },
        memberId: member.id,
        payments: {
          proofPayment: `images/${req.file.filename}`,
          bankFrom: bankFrom,
          accountHolder: accountHolder,
        },
      };
      const booking = await Booking.create(newBooking);

      res.status(200).json({ message: 'Succes Booking', booking });
    } catch (error) {
      console.log(error);
    }
  },
};
