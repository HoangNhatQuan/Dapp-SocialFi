import React, { useState } from 'react';
import { Button, Modal, Tabs } from 'antd';




const CourseTestComponent: React.FC = () => {
  const [idView, setIdView] = useState(1);
  const [result, setResult] = useState([{
    idQuestion: 0,
    answer: ''
  }]);
  let disabled = false;
  const cardData = [
    {
      id: 1,
      title: 'Rust Quizz',
      content: 'Which choice is not a scalar data type?',
      questions: {
        a: 'integer',
        b: 'float',
        c: 'boolean',
        d: '[i32; 10]'
      }
    },

  ]

  function handleNext() {
    console.log(idView)
    if (idView < cardData.length) {
      setIdView(idView + 1)
    }


  }

  function handlePrevious() {

    if (idView > 1) {
      setIdView(idView - 1)
    }
  }

  function handleSubmit() {
    alert('1');
  }

  function handleSelectAnswer(idQuestion: number, answer: string) {
    const cloneResult = result
    console.log('cloneResult', cloneResult);

    const temp = cloneResult.filter(item => item.idQuestion !== idQuestion && item.idQuestion !== 0)
    let obj = {
      idQuestion: idQuestion,
      answer: answer
    }
    temp.push(obj)
    setResult(temp)

  }


  const [modal2Open, setModal2Open] = useState(false);

  const items = new Array(10).fill(null).map((_, i) => {
    const id = String(i + 1);
    return {
      label: `Question ${id}`,
      key: id,
      children: (
        <>
          <div style={{ display: 'flex', width: '100%', height: "100%" }} className='mt-10'>

            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 bg-transparent">
              {cardData.filter(item => item.id === idView).map(({ id, title, content, questions }, index) => (
                <div>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{title}</h5>
                  </a>
                  <div style={{ height: "170px" }}>
                    <p className="mb-3 font-normal">{content}</p>
                  </div>

                  <div style={{ display: 'flex' }} className="flex-wrap">
                    <button type="button" onClick={() => handleSelectAnswer(id, questions.a)} className="text-white focus:bg-violet-700 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-2/5">
                      {questions.a}
                    </button>
                    <button type="button" onClick={() => handleSelectAnswer(id, questions.b)} className="text-white focus:bg-violet-700 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-2/5">
                      {questions.b}
                    </button>
                    <button type="button" onClick={() => handleSelectAnswer(id, questions.c)} className="text-white focus:bg-violet-700 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-2/5">
                      {questions.c}
                    </button>
                    <button type="button" onClick={() => handleSelectAnswer(id, questions.d)} className="text-white focus:bg-violet-700 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 w-2/5">
                      {questions.d}
                    </button>
                  </div> </div>
              ))}
              <div style={{ textAlign: 'end' }} className='mt-8'>

                <button onClick={handleNext} disabled={idView === cardData.length ? true : false} className="w-[100px] cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-5 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative px-8 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Next
                  </span>
                </button>
                <button onClick={() => setModal2Open(true)} className="w-[100px] cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-5 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span className=" relative px-6 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Submit
                  </span>
                </button>

              </div>



            </div>
            <img src="/Quiz_img.png" alt="" className="w-[30%] h-[30%] object-contain ml-32" />
          </div>
        </>
      ),
    };
  });

  return (

    <div className="card-container m-10">
      <Tabs type="card" items={items} />
      <Modal
        title="Congratulations"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div className='flex flex-col place-items-center'>
          <img
            src="/Cup.png"
            alt="Certificate"
            className='w-[15%] h-[15%] object-contain mx-auto mt-2 '
          />
          <p className='mb-2'>You have just finished the basics of Rust Programming</p>

          <p className='mb-2'>Have your award!!!</p>
          <div className='mb-2 flex flex-row justify-center'>
            <p className='text-purple-500 text-lg'>+10</p>
            <img src="/logo192.png" alt="" className='w-[6%] h-[6%] object-contain ml-3 mr-2' />
            <p className='text-purple-500 text-lg'>TOKENS </p>
          </div>

          <img
            src="/Certificate.jpg"
            alt="Certificate"
            className='w-[100%] h-[100%] object-contain mt-2 '
          />
        </div>

      </Modal>
    </div>


  );

};

export default CourseTestComponent