import ClassInfo from './classInfo'

import { useState } from 'react';

const classes = () => {

  const [classCategory, setClassCategory] = useState('all');

  const classInfo = [
    { classId: 1, name: 'Body Building', schedule: 'Mon-Fri | 9.00 - 10.00', imgUrl: '/images/class_1.png', category: 'men' },
    { classId: 2, name: 'Body Building', schedule: 'Mon-Fri | 9.00 - 10.00', imgUrl: '/images/class_2.png', category: 'women' },
    { classId: 3, name: 'Body Building', schedule: 'Mon-Fri | 9.00 - 10.00', imgUrl: '/images/class_3.png', category: 'men' },
    { classId: 4, name: 'Body Building', schedule: 'Mon-Fri | 9.00 - 10.00', imgUrl: '/images/class_4.png', category: 'women' },
    { classId: 5, name: 'Body Building', schedule: 'Mon-Fri | 9.00 - 10.00', imgUrl: '/images/class_5.png', category: 'men' },
  ];

  const filterClassCategory = (e, category) => {
    e.preventDefault();
    setClassCategory(category);
  }

  const classes = classInfo
    .filter(c => {
      if (classCategory === 'all') {
        return true;
      } else {
        return c.category === classCategory;
      }
    })
    .map(c => <ClassInfo name={c.name} schedule={c.schedule} imgUrl={c.imgUrl} key={c.classId} />);

  return (
    <>
      <div id="classes" className="mb-48"></div>
      <section className="mb-32 flex flex-col ml-10 xl:ml-0">
        <nav className="flex flex-col xl:flex-row items-baseline justify-between">
          <h2 className="text-2xl font-bold pb-10 xl:pb-2">
            <span className="pb-4 border-b-4 border-brand-primary">Our C</span>lasses
          </h2>
          <div className="flex items-baseline mr-56">
            <a href="#" onClick={(e) => filterClassCategory(e, 'all')} className={classCategory === 'all' ? 'mx-2 md:mx-4 pb-2 px-4 border-b-2 border-brand-primary' : 'mx-2 md:mx-4 px-4'}>All</a>
            <a href="#" onClick={(e) => filterClassCategory(e, 'men')} className={classCategory === 'men' ? 'mx-2 md:mx-4 pb-2 px-4 border-b-2 border-brand-primary' : 'mx-2 md:mx-4 px-4'}>Mens</a>
            <a href="#" onClick={(e) => filterClassCategory(e, 'women')} className={classCategory === 'women' ? 'mx-2 md:mx-4 pb-2 px-4 border-b-2 border-brand-primary' : 'mx-2 md:mx-4 px-4'}>Womens</a>
          </div>
        </nav>
        <p className="text-xs text-brand-secondary mt-10 xl:w-8/12 mb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <div className="flex flex-col -ml-10 xl:ml-0 items-center xl:flex-row xl:justify-left">
          {classes}
        </div>
      </section>
    </>
  );
}

export default classes;