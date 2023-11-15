import {useTranslation} from "react-i18next";

const Resources = () => {
    const {t} = useTranslation();
    return (
        <div className="tertiary-gradient p-1 m-3 rounded-xl text-sm">
            <h2 className="px-3 pt-4 text-center">{t('footer.h2')}</h2>
                <div className="flex flex-col justify-center p-2 text-center">
                    <h3>{t('footer.icons')}</h3>
                    <div className="flex justify-center">
                        <ul className="p-2">
                            <li><a href="https://www.flaticon.com/free-icons/wordpress"
                                   title="wordpress icons">Wordpress</a>
                            </li>
                            <li><a href="https://www.flaticon.com/free-icons/mysql" title="mysql icons">Mysql</a></li>
                        </ul>
                        <ul className="p-2">
                            <li><a href="https://www.flaticon.com/free-icons/html" title="html icons">Html</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/css" title="css icons">Css</a></li>
                        </ul>
                        <ul className="p-2">
                            <li><a href="https://www.flaticon.com/free-icons/react" title="react icons">React</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/node-js" title="node js icons">Node</a></li>
                        </ul>
                        <ul className="p-2">
                            <li><a href="https://www.flaticon.com/free-icons/typescript"
                                   title="typescript icons">Typescript</a>
                            </li>
                            <li><a href="https://www.flaticon.com/free-icons/javascript"
                                   title="javascript icons">Javascript</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-center flex-wrap p-2 text-center">
                    <h3>{t('footer.bgc')}</h3>
                    <ul>
                        <li><a
                            href="https://unsplash.com/@anniespratt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Annie
                            Spratt</a> on <a
                            href="https://unsplash.com/photos/an-abstract-painting-with-orange-and-blue-colors-0ZPSX_mQ3xI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default Resources;
