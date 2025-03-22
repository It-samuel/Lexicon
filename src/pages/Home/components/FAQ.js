import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use Lexicon?",
          "answer": "Lexicon is your one-stop destination for a seamless and enjoyable eBook shopping experience. With a vast library of titles, user-friendly navigation, and secure payment options, Lexicon makes it easy to discover, purchase, and read your favorite books. Whether you're at home or on the go, Lexicon ensures that your reading journey is smooth, affordable, and accessible."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Yes! Lexicon is designed to be fully responsive, allowing you to access your eBooks on any device, including smartphones and tablets. Simply log in to your account from your mobile browser, and your entire library will be at your fingertips. Enjoy reading anytime, anywhere!"
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "We want you to be completely satisfied with your purchase. If you encounter any issues with your eBook or are dissatisfied for any reason, please contact our support team within 14 days of purchase. We’ll be happy to assist you with a refund or replacement, provided the request meets our refund policy criteria."
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Absolutely! Lexicon supports a wide range of international payment methods, including credit cards, debit cards, and popular payment gateways like PayPal. No matter where you are in the world, you can easily purchase and enjoy your favorite eBooks with secure and hassle-free transactions."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold  dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}