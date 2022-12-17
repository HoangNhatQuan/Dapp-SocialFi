import { Button } from 'antd'
import React, { useEffect } from 'react'
import {
  LeftOutlined,
  CodeOutlined,
  DesktopOutlined,
  FileProtectOutlined,
  ProfileOutlined,
} from '@ant-design/icons'
import { Link, useParams } from 'react-router-dom'
import SCREEN_PATH_CODE from 'utils/enums/routes.enum'

function CourseComponent() {
  const topic1 = [
    {
      name: 'Why Rust?',
      online: true,
    },
    {
      name: 'Environment Setup',
      online: true,
    },
    {
      name: 'HelloWorld Example',
      online: true,
    },
  ]
  const topic2 = [
    {
      name: 'Variable Declarations',
      online: true,
    },
    {
      name: 'Type Signature',
      online: false,
    },
    {
      name: 'Shadowing',
      online: false,
    },
    {
      name: 'Pattern Binding',
      online: false,
    },
    {
      name: 'Unused Variables',
      online: false,
    },
  ]

  const { id } = useParams()

  useEffect(() => {
    console.log('courseId', id)
  }, [id])

  return (
    <div className="flex flex-col overflow-auto bg-fixed mx-4">
      <div className="h-96 relative">
        <img
          src={require('./imgs/rust_img.png')}
          alt="planet-04"
          className="absolute brightness-50 w-full h-full object-cover rounded-[18px]"
        />
        <div className="absolute mt-6 ml-6 text-stone-100 p-2 cursor-pointer">

          <Link to={SCREEN_PATH_CODE.HOME}>
            <LeftOutlined />
            <span className="absolute mg ml-2 mt-2 top-0.5 text-slate-200">
              Home
            </span>
          </Link>
        </div>
        <div className="absolute mt-20 md:max-lg:mt-16 ml-10 w-3/5">
          <h2 className="font-bold text-4xl">
            Introduction to Rust Programming Language
          </h2>
          <h4 className="mt-6 sm:mt-4 mr-6 font-semibold text-zinc-300 text-xl">
            Rust made Easy! No Previous Experience Required.The course takes you
            from Zero to Hero
          </h4>
          <h4 className="mt-10 sm:mt-8 text-2xl font-semibold">
            Take your first steps with Rust
          </h4>
        </div>
        <div className="absolute mt-80 ml-10 text-xl flex flex-row">
          <div className="w-40">
            <DesktopOutlined />
            <span className="absolute mg ml-3 top-1 text-slate-200">
              <span className="font-bold mr-2">4/72</span>
              <span className="text-zinc-300">Lessons</span>
            </span>
          </div>
          <div className="w-40 ml-10">
            <ProfileOutlined />
            <span className="absolute mg ml-3 top-1 text-slate-200">
              <span className="font-bold mr-2">1/13</span>
              <span className="text-zinc-300">Topics</span>
            </span>
          </div>
          <div className="w-40 ml-10">
            <CodeOutlined />
            <span className="absolute mg ml-3 top-1 text-slate-200">
              <span className="font-bold mr-2">1/13</span>
              <span className="text-zinc-300">Quizz</span>
            </span>
          </div>
          <div className="w-52 ml-10">
            <FileProtectOutlined />
            <span className="absolute mg ml-3 top-1 text-slate-200">
              <span className="font-bold mr-2">0/1</span>
              <span className="text-zinc-300">Final Project</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-6/12">
          <div className="flex flex-col w-full m-4">
            <h4 className="font-semibold mt-3 mb-2 ml-2 text-zinc-300">
              TOPIC 1
            </h4>
            <h1 className="font-bold text-2xl ml-2 mb-2 ">
              Understanding Rust Language
            </h1>
            <div className="mx-auto w-full max-w-5xl">
              <ul className="flex flex-col">
                {topic1.map((course) => (
                  <Link
                    to={`${SCREEN_PATH_CODE.COURSE}/${id}/${'section-2020'}`}
                  >
                    <li
                      key={course.name}
                      className="mt-4 bg-gray-700 cursor-pointer rounded-md"
                    >
                      <div
                        className={`rounded-md py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent h-24  ${course.online
                          ? 'hover:border-green-500 hover:bg-gray-600'
                          : 'hover:border-red-500 hover:bg-gray-600'
                          }`}
                      >
                        {/* :USER DETAILS */}
                        <div className="sm:pl-4 pr-8 flex sm:items-center">
                          {/* ::User Picture */}
                          <svg
                            className="h-8 w-8 text-white mr-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            />
                          </svg>
                          {/* ::User Infos */}
                          <div className="space-y-1">
                            {/* :::name */}
                            <p className="text-white font-bold tracking-wide text-xl">
                              {course.name}
                            </p>
                            {/* :::role */}
                            <a className="flex flex-row relative">
                              <svg
                                className="h-5 w-5 text-zinc-300 hover:text-white"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                {' '}
                                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                                <circle cx="12" cy="13" r="7" />{' '}
                                <polyline points="12 10 12 13 14 13" />{' '}
                                <line x1="7" y1="4" x2="4.25" y2="6" />{' '}
                                <line x1="17" y1="4" x2="19.75" y2="6" />
                              </svg>
                              <span className="absolute left-6 text-zinc-300 hover:text-white">
                                Remind me
                              </span>
                            </a>
                          </div>
                        </div>

                        {/* :USER STATUS & BUTTON */}
                        <div className="pr-4 flex flex-col justify-between items-end">
                          {/* ::User Online Status */}
                          <div>
                            {course.online ? (
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="check-circle"
                                  className="w-6 h-6 text-emerald-400"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                  ></path>
                                </svg>
                                <span className="text-xs text-emerald-400 font-semibold">
                                  Complete
                                </span>
                              </div>
                            ) : (
                              <span className="text-xs text-red-500 font-semibold mr-2">
                                Dismiss
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full m-4">
            <h4 className="font-semibold mt-3 mb-2 ml-2 text-zinc-300">
              TOPIC 2
            </h4>
            <h1 className="font-bold text-2xl ml-2 mb-2 ">Variable</h1>
            <div className="mx-auto w-full max-w-5xl">
              <ul className="flex flex-col">
                {topic2.map((course) => (
                  <Link
                    to={`${SCREEN_PATH_CODE.COURSE}/${id}/${'section-2020'}`}
                  >
                    <li
                      key={course.name}
                      className="mt-4 bg-gray-700 cursor-pointer rounded-md"
                    >
                      <div
                        className={`rounded-md py-5 px-4 flex justify-between border-l-4 border-transparent bg-transparent h-24  ${course.online
                          ? 'hover:border-green-500 hover:bg-gray-600'
                          : 'hover:border-red-500 hover:bg-gray-600'
                          }`}
                      >
                        {/* USER DETAILS */}
                        <div className="sm:pl-4 pr-8 flex sm:items-center">
                          {/*User Icon */}
                          <svg
                            className="h-8 w-8 text-white mr-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            />
                          </svg>
                          {/*User Infos */}
                          <div className="space-y-1">
                            {/*name */}
                            <p className="text-white font-bold tracking-wide text-xl">
                              {course.name}
                            </p>

                            <a className="flex flex-row relative">
                              <svg
                                className="h-5 w-5 text-zinc-300 hover:text-white"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                {' '}
                                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                                <circle cx="12" cy="13" r="7" />{' '}
                                <polyline points="12 10 12 13 14 13" />{' '}
                                <line x1="7" y1="4" x2="4.25" y2="6" />{' '}
                                <line x1="17" y1="4" x2="19.75" y2="6" />
                              </svg>
                              <span className="absolute left-6 text-zinc-300 hover:text-white">Remind me</span>
                            </a>
                          </div>
                        </div>
                        {/* USER STATUS & BUTTON */}
                        <div className="pr-4 flex flex-col justify-between items-end">
                          {/*User Online Status */}
                          <div>
                            {course.online ? (
                              <div>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="far"
                                  data-icon="check-circle"
                                  className="w-6 h-6 text-emerald-400"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                                  ></path>
                                </svg>
                                <span className="text-xs text-emerald-400 font-semibold">
                                  Complete
                                </span>
                              </div>
                            ) : (
                              <span className="text-xs text-red-500 font-semibold mr-2">
                                Dismiss
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-5/12 ">
          <Link to={SCREEN_PATH_CODE.COURSE_TEST}>
            <div className="w-full mx-16 mt-9 border-2 p-2 flex flex-row rounded">
              <h4 className="font-semibold text-xl p-3">Final Project: </h4>
              <button type="button" className="inline-block px-6 h-12 mt-1 ml-4 bg-purple-800 text-white font-bold text-lg leading-tight rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Do it</button>
            </div>
          </Link>

          <div className=" w-full mx-12 mt-5 p-1">
            <h4 className="font-semibold text-xl p-3">Course Details</h4>
            <div className="grid gap-4 grid-cols-2">
              <div className="flex flex-row ml-3 mt-2">
                <svg
                  className="h-5 w-5 text-white text-zinc-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <path stroke="none" d="M0 0h24v24H0z" />{' '}
                  <rect x="4" y="5" width="16" height="16" rx="2" />{' '}
                  <line x1="16" y1="3" x2="16" y2="7" />{' '}
                  <line x1="8" y1="3" x2="8" y2="7" />{' '}
                  <line x1="4" y1="11" x2="20" y2="11" />{' '}
                  <line x1="10" y1="16" x2="14" y2="16" />{' '}
                  <line x1="12" y1="14" x2="12" y2="18" />
                </svg>
                <span className="ml-2 text-zinc-300">
                  12 Dec, 2022 last updated
                </span>
              </div>
              <div className="flex flex-row ml-3 mt-2">
                <svg
                  className="h-5 w-5 text-white text-zinc-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <path stroke="none" d="M0 0h24v24H0z" />{' '}
                  <circle cx="14" cy="6" r="2" />{' '}
                  <line x1="4" y1="6" x2="12" y2="6" />{' '}
                  <line x1="16" y1="6" x2="20" y2="6" />{' '}
                  <circle cx="8" cy="12" r="2" />{' '}
                  <line x1="4" y1="12" x2="6" y2="12" />{' '}
                  <line x1="10" y1="12" x2="20" y2="12" />{' '}
                  <circle cx="17" cy="18" r="2" />{' '}
                  <line x1="4" y1="18" x2="15" y2="18" />{' '}
                  <line x1="19" y1="18" x2="20" y2="18" />
                </svg>
                <span className="ml-2 text-zinc-300">Medium level</span>
              </div>
              <div className="flex flex-row ml-3 mt-2">
                <svg
                  className="h-5 w-5 text-white text-zinc-300"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <path stroke="none" d="M0 0h24v24H0z" />{' '}
                  <line x1="12" y1="12" x2="12" y2="12.01" />{' '}
                  <path
                    d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                    transform="rotate(45 12 12)"
                  />{' '}
                  <path
                    d="M12 2a4 10 0 0 0 -4 10a4 10 0 0 0 4 10a4 10 0 0 0 4 -10a4 10 0 0 0 -4 -10"
                    transform="rotate(-45 12 12)"
                  />
                </svg>
                <span className="ml-2 text-zinc-300">Full lifetime access</span>
              </div>
              <div className="flex flex-row ml-3 mt-2">
                <svg
                  className="h-5 w-5 text-white text-zinc-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="ml-2 text-zinc-300">English, Viet Nam</span>
              </div>
              <div className="flex flex-row ml-3 mt-2">
                <svg
                  className="h-5 w-5 text-white text-zinc-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />{' '}
                  <polygon points="12 15 17 21 7 21 12 15" />
                </svg>
                <span className="ml-2 text-zinc-300">
                  Access on laptop, tablet and phone
                </span>
              </div>
              <div className="flex flex-row ml-3 mt-2">
                <svg
                  className="h-5 w-5 text-white text-zinc-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <circle cx="12" cy="8" r="7" />{' '}
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                <span className="ml-2 text-zinc-300">
                  Certificate of completion
                </span>
              </div>
            </div>
          </div>

          <div className="w-full mx-16 mt-9 border-2 p-2">
            <h4 className="font-semibold text-xl p-3">What you'll learn</h4>
            <div className="grid gap-4 grid-cols-2 p-3">
              <div className="flex flex-row">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="ml-2 text-zinc-300">
                  Master all the basics of Rust Programming
                </span>
              </div>
              <div className="flex flex-row">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="ml-2 text-zinc-300">
                  Develop problem solving ability
                </span>
              </div>
              <div className="flex flex-row">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="ml-2 text-zinc-300">
                  Fundamentals of Programming
                </span>
              </div>
              <div className="flex flex-row">
                <svg
                  className="h-7 w-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {' '}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="ml-2 text-zinc-300">
                  Practical Understanding of Fundamentals of Rust
                </span>
              </div>
            </div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseComponent
