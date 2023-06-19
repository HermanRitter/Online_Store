import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Pagination} from "react-bootstrap";
import PageItem from 'react-bootstrap/PageItem'
import cn from 'classnames'
import styles from "./Pages.module.css"
import {fetchDevices} from "../../http/deviceApi";

const Pages = observer(({scrollerBoxWidth}) => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    const getAllCars = (event) => {
        fetchDevices(null, null, 1, 9).then(data => {
            device.setSelectedBrand({})
            device.setSelectedType({})
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }

    console.log(device.totalCount)
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
            <div className={styles.pages}>
                <button onClick={event => getAllCars()} type='button' className={styles.pagesBtn}>All Cars</button>
                {device.totalCount === 0
                    ?
                    <div className={styles.pagesBox}>
                        <div className={styles.selectedPage}>
                            1
                        </div>
                    </div>
                    :
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
                }
            </div>
    );
});

export default Pages;