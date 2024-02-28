import React, { useState, useRef, useEffect } from 'react';
import styles from './Collapsible.module.scss';

const Collapsible = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const titleRef = useRef(null);

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
