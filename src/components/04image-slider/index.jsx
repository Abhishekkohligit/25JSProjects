/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { MdError } from "react-icons/md";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./styles.css";

export default function ImageSlider({ url, limit = "5", page = "2" }) {
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [errorMsg, setErrorMsg] = useState(null);
	const [loading, setLoading] = useState(false);

	async function fetchImages(getUrl) {
		try {
			setLoading(true);
			const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

			const imageData = await response.json();

			if (imageData) {
				setImages(imageData);
				console.log("Images", images);
				setLoading(false);
			}
		} catch (error) {
			setErrorMsg(error.message);
			setLoading(false);
		}
	}
	function handlePrev() {
		setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
	}
	function handleNext() {
		setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
	}

	useEffect(() => {
		if (url !== "") fetchImages(url);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	if (loading) {
		return (
			<div>
				<VscLoading className="sliderLoadingIcon" size={40} />
				<p>Images Loading Please wait...</p>
			</div>
		);
	}

	if (errorMsg) {
		console.log(errorMsg);
		return (
			<div className="sliderError">
				<MdError size={40} />
				<p>Something went wrong</p>
			</div>
		);
	}

	return (
		<div className="sliderWrapper">
			<div className="sliderContainer">
				<FaArrowAltCircleLeft
					onClick={handlePrev}
					size={20}
					className="sliderArrow sliderArrow-left"
				/>
				{images && images.length
					? images.map((imageItem, index) => (
							<>
								<img
									key={imageItem.id}
									src={imageItem.download_url}
									alt={imageItem.download_url}
									className={
										currentSlide === index
											? "sliderCurrentImage"
											: "sliderCurrentImage sliderHideCurrentImage"
									}
								/>
							</>
					  ))
					: null}
				<FaArrowAltCircleRight
					onClick={handleNext}
					size={20}
					className="sliderArrow sliderArrow-right"
				/>
				<span className="sliderCircle-indicators">
					{images && images.length
						? images.map((_, index) => (
								<button
									key={index}
									className={
										currentSlide === index
											? "sliderCurrentIndicator"
											: "sliderCurrentIndicator slideUpdateCurrentIndicator"
									}
									onClick={() => setCurrentSlide(index)}
								></button>
						  ))
						: null}
				</span>
			</div>
		</div>
	);
}
