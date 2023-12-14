'use client'

import DarkModeBtn from "@/components/darkModeBtn";
import { ChangeEvent, useState } from "react"


export default function Home() {
  const [text, setText] = useState("");
  const handlerTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  }
  return (
    <main className="flex flex-col-reverse flex-reverse p-4 w-full h-screen gap-4 bg-[--color-background] md:flex-row md:gap-10 md:p-10">
      <div className="grow rounded-2xl bg-[--color-bright]">
        <textarea className="w-full h-full bg-transparent rounded-2xl p-4 resize-none" value={text} onChange={handlerTextChange} />
      </div>
      <div className="min-w-[300px] flex flex-col gap-4">
        <div className="flex h-12 items-center">
          <h1 className="text-3xl font-bold grow leading-[48px]">Counting Letters</h1>
          <DarkModeBtn />
        </div>
        <div className="flex flex-wrap">
          <div className="basis-[50%] md:basis-[100%]">
            <div className="tr">
              <h3 className="th">공백제외</h3>
              <p className="td">{text.replaceAll("\n", "").replaceAll(" ", "").length}</p>
            </div>
            <div className="tr">
              <h3 className="th">공백포함</h3>
              <p className="td">{text.length}</p>
            </div>
          </div>
          <div className="basis-[50%] md:basis-[100%]">
            <div className="tr">
              <h3 className="th">단어 수</h3>
              <p className="td">{text === "" ? 0 : text.replaceAll("\n", " ").split(" ").length}</p>
            </div>
            <div className="tr">
              <h3 className="th">줄 수</h3>
              <p className="td">{text === "" ? 0 : text.split("\n").length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed right-0 top-0 w-12 h-12">
      </div>
    </main >
  )
}