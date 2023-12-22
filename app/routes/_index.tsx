import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";



export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-blue-300">
      <h1 className="text-white text-4xl mb-36">To-Do List</h1>
      <div className="w-1/2 h-1/2">
        <Form method="post" navigate={false} className="flex">
          <input name="todo" type="text" className="focus:outline-none w-1/2"></input>
          <div className="bg-white">
            <button className="bg-red-600 text-xl text-white px-2 hover:bg-red-500">+</button>
          </div>
          <select name="category" id="category" className="ml-6 focus:outline-none">
            <option value="">Category</option>
            <option value="work">work</option>
            <option value="home">home</option>
            <option value="shopping">shopping</option>
          </select>
        </Form>
      </div>
    </div>
  );
}
