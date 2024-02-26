import styles from '../../styles/create.module.scss';
import Select, {
	SingleValue,
	components,
	InputProps,
	OptionProps,
	SingleValueProps,
	MultiValue,
} from 'react-select';
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
type BookmarkIconSelectProps = {
	color: string;
};
export default function BookmarkIconSelect({ color }: BookmarkIconSelectProps) {
	const [selectedOption, setSelectedOption] = useState<SingleValue<{
		value: string;
		label: JSX.Element;
	}> | null>(null);

	const Input = (props: InputProps<{ value: string; label: JSX.Element }>) => {
		return (
			<div style={{ display: 'none' }}>
				<components.Input {...props} />
			</div>
		);
	};

	const Option = (
		props: OptionProps<{ value: string; label: JSX.Element }>
	) => {
		return (
			<div style={{ color: `${color}` }}>
				<components.Option {...props} />
			</div>
		);
	};
	const SingleValue = (
		props: SingleValueProps<{ value: string; label: JSX.Element }>
	) => (
		<components.SingleValue {...props}>{props.children}</components.SingleValue>
	);

	const handleChange = (
		newValue:
			| MultiValue<{ value: string; label: JSX.Element }>
			| SingleValue<{ value: string; label: JSX.Element }>
	) => {
		setSelectedOption(
			newValue as SingleValue<{ value: string; label: JSX.Element }>
		);
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
			styles={{
				singleValue: (base) => ({
					...base,
					color: color,
				}),
			}}
			components={{ Option, Input, SingleValue }}
			defaultValue={options[0]}
			onChange={handleChange}
			options={options}
			classNamePrefix='select'
		/>
	);
}
