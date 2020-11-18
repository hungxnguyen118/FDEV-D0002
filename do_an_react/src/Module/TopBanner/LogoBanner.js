import React, { useState } from 'react';

const LogoBanner = (props) => {
    const [title_edit, SetTitleEdit] = useState(props.title_logo);

    // setTimeout(() => {
    //     SetTitleEdit(title_edit + ' đã sửa ');
    // }, 5000)

    return (
        <div className="logo">
            <h1><a href="index.html">{title_edit}</a></h1>
        </div>
    );
};

export default LogoBanner;