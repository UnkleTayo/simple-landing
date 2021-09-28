import React, { Fragment } from 'react';
import { Box } from 'theme-ui';
import RcDrawer from 'rc-drawer';

export default function Drawer({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className || ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration={'.45'}
        {...props}
      >
        {closeButton && (
          <Box as="div" onClick={toggleHandler} sx={closeBtnStyle}>
            {closeButton}
          </Box>
        )}
        <Box  sx={drawerStyle}>{children}</Box>
      </RcDrawer>
      <Box onClick={toggleHandler} className='drawer__handler' style={{
        display: 'inline-bock'
      }}>{drawerHandler}</Box>
    </Fragment>
  );
}

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};
