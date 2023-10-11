/** @format */

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
	return (
		<>
			<div className='flex flex-row flex-wrap justify-center gap-10'>
				{technologies.map((technology) => (
					<div className='w-28 h-28 tech-icon' key={technology.name}>
						<img
							src={technology.icon}
							alt='web-development'
							className='w-28 h-28 object-contain '
						/>
						{/* <BallCanvas icon={technology.icon} /> */}
					</div>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Tech, 'tech');
