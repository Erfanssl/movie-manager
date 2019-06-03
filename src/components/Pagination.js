const Pagination = (data, pageSize, currentPage) => {
    const pages = Math.ceil(data.length / pageSize);
    return {
        pages,
        data: data.slice((currentPage - 1) * pageSize, pageSize * currentPage)
    };
};

export default Pagination;