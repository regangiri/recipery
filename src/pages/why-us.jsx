import React from "react";
import Navbar from "../components/Navbar";
import { Disclosure } from "@headlessui/react";
import { IoChevronUpCircleOutline } from "react-icons/io5";

function WhyUs() {
  return (
    <>
      <Navbar />
      <div className="lg:px-24 py-8 bg-primary min-h-screen">
        <h1 className="py-6 text-xl text-center font-bold">
          Kenapa harus memilih Recipery?
        </h1>
        <div className="mx-auto w-full  rounded-2xl bg-white p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-\00 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 my-1 border-2">
                  <span>Apa itu Recipery?</span>
                  <IoChevronUpCircleOutline
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-primary`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Recipery merupakan sebuah aplikasi berbasi web yang
                  dikembangkan untuk memberikan pilihan-pilihan resep masakan
                  dengan memikirkan kebutuhan kalori pengguna. Hal tersebut
                  ditujukan agar pengguna aplikasi mencari resep yang sesuai dan
                  tidak berlebihan dalam mengkonsumsi makanan dikarenakan
                  banyaknya penyakit yang dapat terjadi akibat konsumsi kalori
                  berlebihan.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-\00 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 my-1 border-2">
                  <span>
                    Bagaimana Recipery mendapatkan data resep masakan?
                  </span>
                  <IoChevronUpCircleOutline
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-primary`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Recipery menggunakan Application Programming Interface(API)
                  yang disediakan oleh website Spoonacular.com. Spoonacular
                  menyediakan data-data resep dengan menampilkan berbagai
                  informasi nutrisi dan bahan yang siap digunakan dalam sebuah
                  program.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-\00 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 my-1 border-2">
                  <span>Fitur apa yang disediakan website Recipery?</span>
                  <IoChevronUpCircleOutline
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-primary`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Recipery menyediakan tampilan-tampilan resep populer yang bisa
                  langsung dilihat ketika user membuka Landing Page. tidak hanya
                  menampilkan resep populer, user juga bisa langsung menginput
                  kebutuhan kalori yang dibutuhkan dalam 1 hari dan mencari
                  resep-resep sesuai dengan kebutuhan kalori ataupun membuat{" "}
                  <i>Meal Plan</i> atau resep yang direncanakan oleh Recipery.
                  User juga bisa langsung menginput nama makanan dan mencari
                  resep, cara memasak, juga mencari nutrisi yang dikandung dalam
                  makanan tersebut.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-\00 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 my-1 border-2">
                  <span>
                    Apakah Recipery menyediakan resep dari seluruh negara?
                  </span>
                  <IoChevronUpCircleOutline
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-primary`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Sayangnya, saat ini Recipery belum menyediakan resep dari
                  seluruh negara. Tentunya Recipery akan terus berkembang dan
                  menyediakan lebih banyak resep masakan sehingga user bisa
                  lebih leluasa dalam hal mencari resep masakan dan
                  memperhatikan nutrisi dalam berbagai makanan.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-\00 px-4 py-2 text-left text-sm font-medium text-primary hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 my-1 border-2">
                  <span>Mengapa Recipery ini dibuat?</span>
                  <IoChevronUpCircleOutline
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-primary`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Recipery dibuat oleh Regan Giri Karuna dari Universitas
                  Gunadarma guna memenuhi syarat kelulusan sebagai tugas akhir
                  skripsi. Recipery dibuat menggunakan framework Next.JS dan
                  TailwindCSS serta API dari Spoonacular. Recipery juga dibuat
                  sebagai aplikasi yang bisa digunakan untuk mencari resep
                  makanan serta nutrisinya, selain dari itu Recipery juga
                  memberikan rekomendasi-rekomendasi resep dan rencana makanan
                  harian sesuai kebutuhan kalori pengguna.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
