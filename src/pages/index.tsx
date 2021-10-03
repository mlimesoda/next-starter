import { FC } from 'react';
import HeaderCard from '$molecules/HeaderCard';

const HomePage: FC = () => {
  return (
    <header className="flex-1 flex items-center">
      <HeaderCard />
    </header>
  );
};

export default HomePage;
