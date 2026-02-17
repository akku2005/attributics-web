const paddingMap = {
  '1.2%': 'lg:px-[1.2%] px-[2%]',
  '5%': 'lg:px-[5%] px-[2%]',
  '15%': 'lg:px-[15%] px-[2%]',
};

const Block = ({
    children,
    minHeight = '',
    background,
    xpad = '1.2%',
  }) => {
    return (
      <div
        style={{
            width: '100%',
            minHeight,
            backgroundColor: background,
        }}
        className={`relative ${paddingMap[xpad]}`}
      >
        {children}
      </div>
    );
  };
  
  export default Block;
