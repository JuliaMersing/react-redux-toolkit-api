import React from 'react';

interface HeaderProps {
	heading: string;
	paragraph: string;
	href: string;
	linkParagraph: string;
}

export const Header: React.FC<HeaderProps> = ({
	heading,
	paragraph,
	href,
	linkParagraph,
}: HeaderProps) => (
	<>
		<div className="flex justify-center">
			<i className=" fa-solid fa-mug-hot icon" />
		</div>
		<h2 className="heading">{heading}</h2>
		<p className="paragraphs">
			{paragraph}
			<a href={href} className="link">
				{linkParagraph}
			</a>
		</p>
	</>
);
