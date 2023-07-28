import React, { useState } from 'react';
import '../App.css';

export function Preinterview(props) {
  const [openIndexes, setOpenIndexes] = useState([]); // 개별 답변들의 인덱스를 저장하는 상태 배열

  const togglefaq = (index) => {
    setOpenIndexes((prevOpenIndexes) =>
      prevOpenIndexes.includes(index)
        ? prevOpenIndexes.filter((item) => item !== index) // 이미 열려있으면 닫기
        : [...prevOpenIndexes, index] // 아니면 열기
    );
  };

  return (
    <section id='box' className='d-flex flex-column align-items-center justify-content-center'>
      <div>
        {props.contentdb.sectionTitle.split('<br>').map((v, i) => (
          <div key={i}>
            <h3 id="title" className={`title${i}`}>{v}</h3>
          </div>
        ))}
      </div>
      <ol className='faq'>
        {props.contentdb.faqlist.map((v, i) => (
          <li key={`d${i}`}>
            <div>
              <h3 onClick={() => togglefaq(i)}><strong>{v.F}</strong></h3>
              {openIndexes.includes(i) && ( // openIndexes 배열에 해당 index가 있으면 답변을 보여줌
                <div className='answer'>
                  {v.Q.split('<br>').map((v, i) => (
                    <React.Fragment key={i}>
                      {v}<br />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
