import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Pagination} from "react-bootstrap";
import PageItem from 'react-bootstrap/PageItem'
import cn from 'classnames'
import styles from "./Pages.module.css"

const Pages = observer(({scrollerBoxWidth}) => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []


    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <div className={styles.pages}>
            <div className={styles.pagesBox}>
                {pages.map(page =>
                    <div
                        className={cn({
                            [styles.selectedPage]: device.page === page
                        }, styles.pagesItem)}
                        key={page}
                        onClick={() => device.setPage(page)
                        }>
                        {page}</div>)}
            </div>
        </div>
    );
});

export default Pages;