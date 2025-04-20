import React from 'react';

function withHospitalStyle(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div style={{ border: '2px solid #5e17eb', padding: '1rem', borderRadius: '10px', marginBottom: '1rem' }}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withHospitalStyle;
