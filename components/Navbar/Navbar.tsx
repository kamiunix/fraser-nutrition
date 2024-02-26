import {Menu, Button, Image, Label, Icon, Sidebar} from "semantic-ui-react";
import { useRouter } from "next/router";
import {useState} from "react";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
    const [activeItem, setActiveItem] = useState('');
    const [visible, setVisible] = useState(false); // State to handle mobile menu visibility

    const handleItemClick = (e, { name }) => setActiveItem(name);

    const router = useRouter();

    const toggleVisibility = () => setVisible(!visible);

    return (
        <>
            <Menu
                borderless
                fixed='top'
                className={styles.menu}>

                <Menu.Header
                    onClick={() => router.push("/")}
                    className={styles.logo}
                >
                    <Label>
                        <Image
                            src='/logo.png'
                            alt="Fraser Nutrition"
                            onClick={() => router.push("/")}
                        />
                        {' Fraser Nutrition'}
                    </Label>
                </Menu.Header>
                <Menu.Item
                    as='a'
                    name='about'
                    active={activeItem === 'about'}
                    onClick={() => router.push('/about')}
                >
                    <b
                        className={styles.item}
                    >About</b>
                </Menu.Item>
                <Menu.Item
                    as='a'
                    name='faq'
                    active={activeItem === 'faq'}
                    onClick={() => router.push('/faq')}
                >
                    <b
                        className={styles.item}
                    >
                        FAQ
                    </b>
                </Menu.Item>
                <Menu.Item
                    as='a'
                    name='Clients'
                    active={activeItem === 'contact'}
                    onClick={() => router.push('/contact')}
                >
                    <b
                        className={styles.item}
                        style={{color: 'white'}}
                    >Contact</b>
                </Menu.Item>
            </Menu>

        </>
    );
};