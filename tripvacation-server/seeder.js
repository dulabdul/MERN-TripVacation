var seeder = require('mongoose-seed');
var mongoose = require('mongoose');

// Connect to MongoDB via Mongoose
seeder.connect(
  'mongodb+srv://dulabdul:dulabdul1521@cluster0.t9lyffm.mongodb.net/db_tripvacation?retryWrites=true&w=majority',
  function () {
    // Load Mongoose models
    seeder.loadModels([
      './models/Category',
      './models/Bank',
      './models/Item',
      './models/Featured',
      './models/Activity',
      './models/Member',
      './models/Image',
      './models/Member',
      './models/Booking',
      './models/Users',
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        'Category',
        'Bank',
        'Item',
        'Member',
        'Item',
        'Featured',
        'Image',
        'Booking',
        'Users',
      ],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  {
    model: 'Category',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901111'),
        name: 'Houses with beauty backyard',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225') },
        ],
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901112'),
        name: 'Hotels with large living room',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229') },
        ],
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc901113'),
        name: 'Apartment with kitchen',
        itemId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233') },
        ],
      },
    ],
  },
  // end category
  // start item
  {
    model: 'Item',
    documents: [
      // Tabby Town
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
        title: 'Tabby Town',
        price: 12,
        sumBooking: 1,
        country: 'Indonesia',
        city: 'Lampung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },
      // Seattle Rain
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
        title: 'Seattle Rain',
        price: 20,
        sumBooking: 2,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },

      // Wodden Pit
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902224'),
        title: 'Wodden Pit',
        price: 20,
        sumBooking: 3,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901111',
      },

      // Anggana
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902225'),
        title: 'Anggana',
        price: 20,
        sumBooking: 4,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [],
        categoryId: '5e96cbe292b97300fc901111',
      },

      // Green Park
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902226'),
        title: 'Green Park',
        price: 20,
        sumBooking: 5,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901112',
      },

      // Podo Wae
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902227'),
        title: 'Podo Wae',
        price: 20,
        sumBooking: 6,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901112',
      },

      // Silver Rain
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902228'),
        title: 'Silver Rain',
        price: 20,
        sumBooking: 7,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901112',
      },

      // Cashville
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902229'),
        title: 'Cashville',
        price: 20,
        sumBooking: 8,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901112',
      },

      // PS Wood
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902230'),
        title: 'PS Wood',
        price: 20,
        sumBooking: 9,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901113',
      },

      // One Five
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902231'),
        title: 'One Five',
        price: 20,
        sumBooking: 11,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901113',
      },

      // Minimal
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902232'),
        title: 'Minimal',
        price: 20,
        sumBooking: 13,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33') },
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901113',
      },

      // Stays Home
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902233'),
        title: 'Stays Home',
        price: 20,
        sumBooking: 14,
        country: 'Indonesia',
        city: 'Bandung',
        isPopular: false,
        description:
          'Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.',
        unit: 'night',
        imageId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35') },
          // done
        ],
        featuredId: [
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07') },
          // done
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08') },
        ],
        activityId: [
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03') },
          { _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04') },
        ],
        categoryId: '5e96cbe292b97300fc901113',
      },
    ],
  },
  // end item
  // start image
  {
    model: 'Image',
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb1'),
        imageUrl: 'images/img-category-1.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb2'),
        imageUrl: 'images/img-category-2.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb3'),
        imageUrl: 'images/img-category-3.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb4'),
        imageUrl: 'images/img-category-2.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb5'),
        imageUrl: 'images/img-category-5.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb6'),
        imageUrl: 'images/img-category-6.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb7'),
        imageUrl: 'images/img-category-3.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb8'),
        imageUrl: 'images/img-category-9.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cdb9'),
        imageUrl: 'images/img-category-10.jpg',
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd10'),
        imageUrl: 'images/img-category-4.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd11'),
        imageUrl: 'images/img-category-12.jpg',
      },
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd12'),
        imageUrl: 'images/img-category-1.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd13'),
        imageUrl: 'images/img-category-5.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd14'),
        imageUrl: 'images/img-category-2.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd15'),
        imageUrl: 'images/img-category-3.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd16'),
        imageUrl: 'images/img-category-6.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd17'),
        imageUrl: 'images/img-category-4.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd18'),
        imageUrl: 'images/img-category-5.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd19'),
        imageUrl: 'images/img-category-6.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd20'),
        imageUrl: 'images/img-category-7.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd21'),
        imageUrl: 'images/img-category-8.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd22'),
        imageUrl: 'images/img-category-7.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd23'),
        imageUrl: 'images/img-category-6.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd24'),
        imageUrl: 'images/img-category-9.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd25'),
        imageUrl: 'images/img-category-8.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd26'),
        imageUrl: 'images/img-category-9.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd27'),
        imageUrl: 'images/img-category-10.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd28'),
        imageUrl: 'images/img-category-9.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd29'),
        imageUrl: 'images/img-category-10.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd30'),
        imageUrl: 'images/img-category-11.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd31'),
        imageUrl: 'images/img-category-11.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd32'),
        imageUrl: 'images/img-category-10.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd33'),
        imageUrl: 'images/img-category-12.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd34'),
        imageUrl: 'images/img-category-1.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd35'),
        imageUrl: 'images/img-category-2.jpg',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cd36'),
        imageUrl: 'images/img-category-11.jpg',
      },
    ],
  },
  // end image
  // start feature
  {
    model: 'Featured',
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa01'),
        name: 'bedroom',
        qty: 2,
        imageUrl: 'images/ic_bedroom.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa02'),
        name: 'living room',
        qty: 23,
        imageUrl: 'images/ic_lv_room.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa03'),
        name: 'televison',
        qty: 12,
        imageUrl: 'images/ic_tv.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa04'),
        name: 'televison',
        qty: 5,
        imageUrl: 'images/ic_tv.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa05'),
        name: 'Wifi',
        qty: 5,
        imageUrl: 'images/ic_wifi.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa06'),
        name: 'unit ready',
        qty: 5,
        imageUrl: 'images/ic_home-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa07'),
        name: 'refigrator',
        qty: 5,
        imageUrl: 'images/ic_kulkas.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa08'),
        name: 'televion',
        qty: 5,
        imageUrl: 'images/ic_tv.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa09'),
        name: 'bedroom',
        qty: 2,
        imageUrl: 'images/ic_bedroom.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa10'),
        name: 'living room',
        qty: 23,
        imageUrl: 'images/ic_lv_room.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa11'),
        name: 'televison',
        qty: 12,
        imageUrl: 'images/ic_tv.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa12'),
        name: 'televison',
        qty: 5,
        imageUrl: 'images/ic_tv.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa13'),
        name: 'Wifi',
        qty: 5,
        imageUrl: 'images/ic_wifi.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa14'),
        name: 'unit ready',
        qty: 5,
        imageUrl: 'images/ic_home-1.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa15'),
        name: 'refigrator',
        qty: 5,
        imageUrl: 'images/ic_kulkas.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        // done
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90aa16'),
        name: 'televion',
        qty: 5,
        imageUrl: 'images/ic_tv.png',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
    ],
  },
  // end feature
  // start activity
  {
    model: 'Activity',
    documents: [
      // done
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb01'),
        name: 'Green Lake',
        type: 'Nature',
        imageUrl: 'images/activity-1.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb02'),
        name: 'Dog Clubs',
        type: 'Pool',
        imageUrl: 'images/activity-2.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb03'),
        name: 'Labour and Wait',
        type: 'Shopping',
        imageUrl: 'images/activity-3.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb04'),
        name: 'Labour and Wait',
        type: 'Shopping',
        imageUrl: 'images/activity-4.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb05'),
        name: 'Green Lake',
        type: 'Nature',
        imageUrl: 'images/activity-3.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb06'),
        name: 'Dog Clubs',
        type: 'Pool',
        imageUrl: 'images/activity-2.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb07'),
        name: 'Labour and Wait',
        type: 'Shopping',
        imageUrl: 'images/activity-1.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90bb08'),
        name: 'Labour and Wait',
        type: 'Shopping',
        imageUrl: 'images/activity-4.jpg',
        itemId: mongoose.Types.ObjectId('5e96cbe292b97300fc902223'),
      },
    ],
  },
  // end activity

  // start booking
  {
    model: 'Booking',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc90cee1'),
        bookingStartDate: '12-12-2020',
        bookingEndDate: '12-12-2020',
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId('5e96cbe292b97300fc902222'),
          title: 'Village Angga',
          price: 6,
          duration: 2,
        },
        total: 12,
        memberId: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        bankId: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        payments: {
          proofPayment: 'images/bukti.jpeg',
          bankFrom: 'BCA',
          status: 'Proces',
          accountHolder: 'ang',
        },
      },
    ],
  },
  // end booking

  // member
  {
    model: 'Member',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903333'),
        firstName: 'Elfin',
        lastName: 'Sanjaya',
        email: 'elfinsanjaya12@gmail.com',
        phoneNumber: '082377954008',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903334'),
        firstName: 'Abdul',
        lastName: 'Rahman',
        email: 'abdul@gmail.com',
        phoneNumber: '082377954008',
      },
    ],
  },
  {
    model: 'Bank',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903322'),
        nameBank: 'Mandiri',
        nomorRekening: '089898',
        name: 'elfin',
        imageUrl: 'images/logo-bca.png',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903323'),
        nameBank: 'BCA',
        nomorRekening: '878678',
        name: 'elfin',
        imageUrl: 'images/logo-mandiri.png',
      },
    ],
  },
  {
    model: 'Users',
    documents: [
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903345'),
        username: 'admin',
        password: 'rahasia',
      },
      {
        _id: mongoose.Types.ObjectId('5e96cbe292b97300fc903346'),
        username: 'superadmin',
        password: 'rahasia',
      },
    ],
  },
];
