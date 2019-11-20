import React from 'react';
import { getCookie, unsetCookie } from './utils/cookieFunctions';

export default function Message() {
  const message = getCookie('message');
  const alertContext = getCookie('alertContext');

  unsetCookie('message');
  unsetCookie('alertContext');

  return (
    <>
      {message && (
        <div className={ `alert ${alertContext} alert-dismissible fade show text-center` }>
          <button className="close" data-dismiss="alert">&times;</button>
          { message }
        </div>
      )}
    </>
  )
}
