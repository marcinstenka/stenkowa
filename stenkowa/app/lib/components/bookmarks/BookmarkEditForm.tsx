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
		bookmarkName,
		bookmarkLink,
		bookmarkIcon,
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
						name='bookmarkName'
						id='bookmarkName'
						onChange={handleHeaderChange}
						value={bookmarkName}
						autoComplete='off'
						minLength={3}
						color-changing='border-color'
						style={{ borderColor: `${color}` }}
					/>
					<h4 className={styles.invisible}>{bookmarkName}</h4>
				</div>
			</div>
			<div className={styles.textarea_container}>
				<div className={styles.details_text}>{bookmarkLink}</div>
				<textarea
					name='bookmarkLink'
					id='bookmarkLink'
					onChange={handleLinkChange}
				>
					{bookmarkLink}
				</textarea>
			</div>

			<div className={styles.details_lower}>
				<div className={styles.icon_container}>
					<BookmarkIconSelect color={color} value={bookmarkIcon} />
				</div>
				<div className={styles.details_lower_icons}>
					<div className={styles.input_color_container}>
						<MdColorLens
							style={{ color: `${bookmark.color}` }}
							color-changing='color'
						/>
						<input
							type='color'
							name='bookmarkColor'
							id='bookmarkColor'
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
