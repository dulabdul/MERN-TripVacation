import React, { useRef, useState } from 'react';
import propTypes from 'prop-types';
import './index.scss';
export default function InputFile(props) {
  const [FileName, setFileName] = useState('');
  const {
    value,
    name,
    placeholder,
    accept,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  const onChange = (e) => {
    setFileName(e.target.value);
    props.onChange({
      target: {
        name: e.target.name,
        value: e.target.files,
      },
    });
  };
  return (
    <div className={['input-text mb-3', outerClassName].join(' ')}>
      <div className='input-group'>
        {prepend && (
          <div className='input-group-prepend bg-gray-900'>
            <span className='input-group-text'>{prepend}</span>
          </div>
        )}
        <input
          type='file'
          name={name}
          ref={refInputFile}
          value={FileName}
          onChange={onChange}
          accept={accept}
          className='d-none'
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={FileName}
          placeholder={placeholder}
          className={['form-control', inputClassName].join(' ')}
        />
        {append && (
          <div className='input group-append bg-gray-900'>
            <span className='input-group-text'>{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

InputFile.defaultProps = {
  placeholder: 'Browse a file...',
};
InputFile.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
