import { FooterProps } from '@/interfaces';

const Footer: React.FC<FooterProps> = ({ year = new Date().getFullYear() }) => {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <p className="text-gray-500 text-sm">
                        © {year} Blog App. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
