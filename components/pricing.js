import { useState } from 'react';
import Plan from './plan'

const pricing = () => {
  const [plan, setPlan] = useState('monthly');

  const togglePlan = () => {
    setPlan(currentPlan => currentPlan === 'annual' ? 'monthly' : 'annual');
  };

  const planData = [
    {name: 'Basic Plan', desc1: 'Sed ut perspiciatis unde', desc2: 'natus error sit quae ab illo inventor', pricePerMonth: 340, pricePerYear: 3740},
    {name: 'Professional Plan', desc1: 'Sed ut perspiciatis unde', desc2: 'natus error sit quae ab illo inventor', pricePerMonth: 540, pricePerYear: 5940},
    {name: 'Standard Plan', desc1: 'Sed ut perspiciatis unde', desc2: 'natus error sit quae ab illo inventor', pricePerMonth: 440, pricePerYear: 4840},
  ];

  const plans = planData.map(p => (
    <Plan
      name={p.name}
      desc1={p.desc1}
      desc2={p.desc2}
      pricePerMonth={p.pricePerMonth}
      pricePerYear={p.pricePerYear}
      highlight={p.name === 'Professional Plan' ? true : false}
      key={p.name}
      currentPlan={plan}
    />));

  return (
    <>
      <div id="pricing" className="mb-48"></div>
      <section className="mb-32 flex flex-col items-center" id="pricing">
          <h2 className="text-2xl font-bold text-center mb-10">
            Our<span className="pb-4 border-b-4 border-brand-primary"> Pric</span>ing
          </h2>
          <p className="text-xs text-brand-secondary w-8/12 text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <div className="flex items-center mt-10 mb-4">
            <h3>Annual Plan</h3>
            <div onClick={togglePlan} className={`flex border w-16 border-gray-500 rounded-full p-1 mx-2 cursor-pointer ${plan === 'annual' ? 'justify-start' : 'justify-end'}`}>
              <button className="bg-brand-green h-6 w-6 rounded-full focus:outline-none"></button>
            </div>
            <h3>Monthly Plan</h3>
          </div>
          <div className="flex flex-col xl:flex-row">
            {plans}
          </div>
      </section>
    </>
  )
}

export default pricing;
