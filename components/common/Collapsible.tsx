import React, { useState, useRef, useEffect } from 'react';
import styles from './Collapsible.module.scss';

const Collapsible = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [titleWidth, setTitleWidth] = useState(500);
    const titleRef = useRef(null);

    useEffect(() => {
        // After the component mounts, measure the title width and set it
        if (titleRef.current) {
            setTitleWidth(Math.max(Math.min(titleRef.current.offsetWidth * 1.2, 10000), 600));
        }
    }, []);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={styles.collapsible}
        >
            <div
                onClick={toggleCollapse}
                className={styles.title}
                style={{
                    justifyContent: 'center',
                }}
            >
                <span style={{
                    fontSize: '1.2em',
                    marginRight: '0.5em'
                }}>
                  {isCollapsed ? '+' : '-'}
                </span>
                <span
                    ref={titleRef}
                    style={{
                        fontSize: '1.2em',
                        textAlign: 'center',
                    }}
                >
                  {title}
                </span>
            </div>
            {!isCollapsed && (
                <div
                    className={styles.content}
                    onClick={toggleCollapse}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapsible;
