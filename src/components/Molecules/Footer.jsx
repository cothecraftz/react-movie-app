import ContentWrapper from '../Atom/ContentWrapper';
import { FaGithub, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="w-full px-8 py-8 bg-footer">
			<ContentWrapper>
				<div className="flex flex-col items-center gap-6">
					<ul className="flex sm:flex-col sm:items-center justify-center gap-6 sm:gap-4 text-light text-lg sm:text-base font-semibold">
						<li>Term Of Use</li>
						<li>Privacy Police</li>
						<li>About</li>
						<li>Blog</li>
						<li>FAQ</li>
					</ul>
					<div>
						<p className="text-center text-light text-sm w-2/3 xl:w-5/6 lg:w-full text-pretty mx-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque unde suscipit
							cupiditate, quae non illo veniam saepe natus id deserunt facere recusandae, a
							aperiam quaerat eveniet soluta! .
						</p>
					</div>
					<div className="flex justify-center gap-4">
						<div className="card-sosmed">
							<FaGithub className="sosmed" />
						</div>
						<div className="card-sosmed">
							<FaInstagram className="sosmed" />
						</div>
						<div className="card-sosmed">
							<FaFacebook className="sosmed" />
						</div>
						<div className="card-sosmed">
							<FaTwitter className="sosmed" />
						</div>
					</div>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
