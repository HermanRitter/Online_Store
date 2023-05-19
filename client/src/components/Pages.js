import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";
import PageItem from 'react-bootstrap/PageItem'

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <div>
            <Pagination className='mt-5'>
                {pages.map(page =>
                    <PageItem key={page}
                              active={device.page === page}
                              onClick={() => device.setPage(page)}
                              activeLabel=''>
                        {page}</PageItem>)}
            </Pagination>
        </div>
    );
});

export default Pages;