import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {
  Bars3Icon,
  AcademicCapIcon,
  HomeIcon,
  UserCircleIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/outline'
import CodeEditorComponent from './components/CodeEditor.component'
import { Button } from 'antd'
import OutputCodeEditor from './components/OutputCodeEditor.component'
import { CodeEditorService } from 'services'
import SCREEN_PATH_CODE from 'utils/enums/routes.enum'

function SectionComponent() {
  const { id, section } = useParams()
  const languageOptions = [
    {
      id: 63,
      name: 'JavaScript (Node.js 12.14.0)',
      label: 'JavaScript (Node.js 12.14.0)',
      value: 'javascript',
    },
  ]

  const [language, setLanguage] = useState(languageOptions[0])
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [responseEditor, setResponseEditor] = useState('')

  useEffect(() => {
    console.log('courseId', section)
  }, [section])

  const onChangeCode = (value: string) => {
    setCode(value)
  }

  const onCombine = async () => {
    setLoading(true)
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(''),
    }
    const token = await CodeEditorService.compileCode(formData)
    const response = await CodeEditorService.checkStatus(token)
    console.log('response', response)
    setLoading(false)
    setResponseEditor(response)
  }

  return (
    <div className="grid grid-rows-12 grid-cols-12 gap-4 mx-4">
      <div className="row-start-1 col-span-12">
        <div className="flex align-middle text-center">
          <button
            type="button"
            className=""
          >
            <Link to={`${SCREEN_PATH_CODE.COURSE}/${id}`}>
              <div className='flex flex-row mt-4'>
                <ChevronLeftIcon className="w-5 h-5 mt-1 mr-3" />

                <p className="text-xl font-bold">Course</p>

              </div>

            </Link>
          </button>

        </div>
      </div>

      <div className="row-start-2 row-span-full col-span-7 ">
        <div className='flex flex-col  ml-6'>
          <h1 className='text-2xl font-bold '>Variable Declarations</h1>
          <span className='text-xl font-semibold mt-5'>
            Learn about variables in Rust.
          </span>
          <span className='text-base mt-5 text-gray-300'>
            In Rust, a variable is an identifier that points to a location memory. This location in memory can be either data or a function.
          </span>
          
          <span className='text-base mt-5 text-gray-300'>
            Variable Declarations

          </span>
          <span className='text-base text-gray-300'>
            To assign variables in Rust we utilize the let keyword with the = operator, taking the following form:
          </span>
          <span className='text-base mt-5 text-gray-300'>
            let variable = "this is a &str";
          </span>
          <span className='text-base text-gray-300'>
            We can assign variables to any expression:
          </span>
          <span className='text-base mt-5 text-gray-300'>
          // This is the outcome of calling the closure
          </span>
          <span className='text-base text-gray-300'>
            let var = double(10);
          </span>
          <span className='text-base mt-5 text-gray-300'>
          // This will re-assign the value of var
          </span>
          <span className='text-base text-gray-300'>
            let doubled_var = var;
          </span>
          <span className='text-xl font-semibold mt-5'>
            Practice:
          </span>
          <span className='text-base mt-2 text-gray-300'>
            Create a variable called myName.<br /><br />
            Hint <br />
              Look at the example above if you get stuck.
          </span>
          <span className='text-xl font-semibold mt-5 '>
            Output:
          </span>
          <div className='bg-zinc-900 px-4 py-4 mt-2 w-5/6 rounded-lg'>
            <span className='text-zinc-400'></span>
          </div>
        </div>
      </div>

      <div className="row-start-2 row-span-7 col-span-5 ">

        <CodeEditorComponent onChangeCode={onChangeCode} />
      </div>
      <div className="row-start-9  col-span-5">

        <div className="flex justify-between align-middle text-center">
          <p className="font-semibold ">Result below</p>
          <Button loading={loading} onClick={onCombine}>
            Compile Code
          </Button>
        </div>
      </div>
      <div className="row-start-10 row-span-full col-span-5 border-indigo-500 rounded-lg border-2">
        <OutputCodeEditor outputDetails={responseEditor} />
      </div>
    </div>
  )
}

export default SectionComponent
