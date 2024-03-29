'use client';
import styles from '../../styles/details.module.scss';
import { MdColorLens, MdDelete } from 'react-icons/md';
import { BookmarkType } from '../../types/types';
import BackButtons from '../global/BackButtons';
import useColorChanging from '../../hooks/useColorChanging';
import useBookmarkEdit from '../../hooks/useBookmarkEdit';
import BookmarkIconSelect from './BookmarkIconSelect';
import { deleteBookmark, updateBookmark } from '../../functions/actions';
import { startTransition } from 'react';

export default function BookmarkEditForm(bookmark: BookmarkType) {
	const {
		handleHeaderChange,
		handleLinkChange,
		handleIconChange,
		details_header,
		link,
		icon,
	} = useBookmarkEdit(bookmark);
	const { color, handleColorChange } = useColorChanging(bookmark.color);
	const updateBookmarkWithId = updateBookmark.bind(null, bookmark.id);
	const deleteBookmarkWithId = deleteBookmark.bind(null, bookmark.id);
	return (
		<form className={styles.details} action={updateBookmarkWithId}>
			<div className={styles.details_header}>
				<div className={styles.input_container}>
					<input
						type='text'
						name='details_header'
						id='details_header'
						onChange={handleHeaderChange}
						value={details_header}
						autoComplete='off'
						minLength={3}
						color-changing='border-color'
						style={{ borderColor: `${color}` }}
					/>
					<h4 className={styles.invisible}>{details_header}</h4>
				</div>
			</div>
			<div className={styles.textarea_container}>
				<div className={styles.details_text}>{link}</div>
				<textarea
					name='details_text'
					id='details_text'
					onChange={handleLinkChange}
				>
					{link}
				</textarea>
			</div>

			<div className={styles.details_lower}>
				<div className={styles.icon_container}>
					<BookmarkIconSelect color={color} value={icon} />
				</div>
				<div className={styles.details_lower_icons}>
					<div className={styles.input_color_container}>
						<MdColorLens
							style={{ color: `${bookmark.color}` }}
							color-changing='color'
						/>
						<input
							type='color'
							name='details_color'
							id='details_color'
							value={color}
							onChange={handleColorChange}
						/>
					</div>
					<div className={styles.details_delete}>
						<MdDelete
							style={{ color: `${color}` }}
							onClick={() =>
								startTransition(() => {
									deleteBookmarkWithId();
								})
							}
						/>
					</div>
				</div>
			</div>
			<BackButtons href='/bookmarks' color={color} />
			<p
				className={styles.details_edit_info}
				style={{ borderColor: `${color}` }}
				color-changing='border-color'
			>
				Kliknij element, aby zmienić
			</p>
		</form>
	);
}
