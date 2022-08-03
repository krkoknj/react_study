import React from 'react';
import { useState } from 'react';

function From() {
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    /**
     * page refresh
     * 폼 안에서 입력값을 전송할 때 페이지가 다시 로딩
     */
    event.preventDefault();
    event.value = setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default From;
