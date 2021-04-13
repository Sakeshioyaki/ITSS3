/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';

function TodoItem({item, onCheck}) {
  const handleChange = () => {
    onCheck({item});
  }
  return (
    <label className='panel-block' >
        <input 
          type="checkbox"
          checked={item.done}
          onChange={handleChange}
        />
        <span className={item.done ? 'has-stext-grey-light' : ''}>
          {item.text}
        </span>
    </label>
  );
}

export default TodoItem;