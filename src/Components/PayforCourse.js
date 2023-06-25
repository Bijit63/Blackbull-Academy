import React from 'react'
import qrCodeImage from "../images/qrcode.png";
import { useParams } from 'react-router-dom';

const PayforCourse = () => {
  const { id } = useParams();

  return (
    <div class="xl:w-[80vw] lg:w-[90vw]  mx-auto px-4 py-10  rounded-lg shadow-lg">
  <h1 class="text-3xl block font-bold text-center mb-8 text-gray-100 poppins">
    Payment Details For {id}
  </h1>
  

  
  <div class="flex flex-col border-[#ffffff3b] border bg-gradient-to-br from-black to-[#0b0b2e] rounded-lg md:flex-row gap-8">

    <div class="  p-6 mb-8">
      <p class="text-lg font-bold mb-4 text-gray-100 poppins">
        To pay for the course, please use the following UPI ID or QR CODE:
      </p>
      
      <p class="text-xl font-bold mb-[2px] text-gray-200 roboto">
        UPI ID - smalakar773-2@okaxis
      </p>
      <p class="text-xl font-bold mb-4 text-gray-200 roboto">
    {id=="Weekend Batch"?"Amount  = ₹ 2499":"Amount : ₹ 4999 "}
      </p>
      <p class="text-lg mb-4 text-gray-400">
        After making the payment, please send the payment screenshot and the following details on Telegram:
      </p>
      <ul class="list-disc pl-8 mb-4 text-gray-200">
        <li>Full Name: XYZ</li>
        <li>Mobile Number: 123456789</li>
        <li>Email ID: abc@gmail.com</li>
      </ul>
      <p class="text-lg font-bold mb-2 text-gray-100">
        Telegram Username:
      </p>
      <p class="text-lg mb-4 text-gray-200">
      <a href="https://web.telegram.org/k/#@Subrata_Malakar_1" target="_blank" rel="noreferrer" class="text-gray-400 hover:text-gray-200 duration-100">@Subrata_Malakar_1</a>
      </p>
      <p class="text-lg mb-4 text-gray-100">
        Once we receive your payment and details, we will provide you with access to the course.
      </p>
    </div>

    <div class="md:w-3/3 flex items-center justify-center">
      <div class=" rounded-lg  p-6">
        <img src={qrCodeImage} alt="QR Code for UPI payment" class="w-52 h-52 mx-auto mb-4" />
        <p class="text-lg text-center font-bold mb-2 text-gray-200">
          Scan this QR code to make the payment using your UPI app.
        </p>
      </div>
    </div>

  </div>
</div>


        
  )
}

export default PayforCourse
