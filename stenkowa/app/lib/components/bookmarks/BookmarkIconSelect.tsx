import styles from '../../styles/create.module.scss';
import Select, { SingleValue } from 'react-select';
import { useState } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FaFacebookMessenger, FaMoneyCheckDollar } from 'react-icons/fa6';
import {
	FaBook,
	FaBusAlt,
	FaCarAlt,
	FaFacebookF,
	FaGithub,
	FaInstagram,
	FaPlane,
	FaStackOverflow,
	FaYoutube,
} from 'react-icons/fa';
import { SiGmail, SiNetflix } from 'react-icons/si';
import { IoIosDocument } from 'react-icons/io';
import { MdOutlineGTranslate } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';

export default function BookmarkIconSelect() {
	const [selectedOption, setSelectedOption] = useState<SingleValue<{
		value: string;
		label: JSX.Element;
	}> | null>(null);

	const handleChange = (
		newValue: SingleValue<{ value: string; label: JSX.Element }>
	) => {
		setSelectedOption(newValue);
	};
	const options = [
		{ value: 'TiWeatherPartlySunny', label: <TiWeatherPartlySunny /> },
		{ value: 'FaMoneyCheckDollar', label: <FaMoneyCheckDollar /> },
		{ value: 'FaFacebookMessenger', label: <FaFacebookMessenger /> },
		{ value: 'FaCarAlt', label: <FaCarAlt /> },
		{ value: 'FaStackOverflow', label: <FaStackOverflow /> },
		{ value: 'SiGmail', label: <SiGmail /> },
		{ value: 'SiNetflix', label: <SiNetflix /> },
		{ value: 'FaBook', label: <FaBook /> },
		{ value: 'FaFacebookF', label: <FaFacebookF /> },
		{ value: 'IoIosDocument', label: <IoIosDocument /> },
		{ value: 'FaBusAlt', label: <FaBusAlt /> },
		{ value: 'MdOutlineGTranslate', label: <MdOutlineGTranslate /> },
		{ value: 'FaInstagram', label: <FaInstagram /> },
		{ value: 'FaYoutube', label: <FaYoutube /> },
		{ value: 'FaPlane', label: <FaPlane /> },
		{ value: 'FaGithub', label: <FaGithub /> },
		{ value: 'CiMail', label: <CiMail /> },
	];
	return (
		<Select
			className={styles.select}
			unstyled
			defaultValue={selectedOption}
			onChange={handleChange}
			options={options}
		/>
	);
}
