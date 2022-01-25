import React from 'react';
import styled from '@mui/material/styles/styled'

import Popover, { FbmPopoverProps } from '../Popover'
import Box from '../Box'
import Typography from '../Typography'
import ConfirmFooter, { FbmConfirmFooterProps } from '../ConfirmFooter'
import { isFunction } from '../../utils'

export interface FbmPopconfirmProps extends FbmConfirmFooterProps {
  /** 弹框标题 */
  title?: React.ReactNode;
  /** 弹框内容 */
  content?: React.ReactNode;
  /** 弹框显示icon */
  icon?: React.ReactNode;
  /** 弹框target */
  children: FbmPopoverProps['children'];
}

interface PopTitleProps {
  children?: React.ReactNode;
}

const PopContent = styled(Box)({
  padding: '0 16px',
})

const PopTitle: React.FC<PopTitleProps> = styled((props) => {
  const { children } = (props as PopTitleProps)
  if (children) {
    return <Typography {...props} />
  }
  return null
})({
  fontSize: 16,
  color: '#000',
  fontWeight: 500,
  height: '56px',
  alignItems: 'center',
  display: 'flex',
})

const Popconfirm: React.FC<FbmPopconfirmProps> = ({
  title,
  content,
  children,
  onOk,
  onClose,
  ...popoverProps
}) => {

  const contentRender = (popover) => {
    const hanldeClose = async () => {
      if (isFunction(popover?.hanldeClose)) {
        popover.hanldeClose()
      }
      if (isFunction(onClose)) {
        onClose()
      }
    }

    return (
      <PopContent>
        <PopTitle>
          {title}
        </PopTitle >
        {content}
        <ConfirmFooter
          onOk={onOk}
          onClose={hanldeClose}
        />
      </PopContent>
    )
  }

  return (
    <Popover
      content={contentRender}
      {...popoverProps}
    >
      {children}
    </Popover>
  )
}


Popconfirm.defaultProps = {
  onOk: () => { }
}

export default Popconfirm