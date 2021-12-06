exports.getAll = (req, res) => {
    console.log(`getAll`);
    res.send('getAll');
}

exports.get = (req, res) => {
    const id = req.params.id;
    console.log(`get - ${id}`);
    res.send(`get - ${id}`);
}

exports.add = (req, res) => {
    console.log('add');
    res.send('add');
}

exports.update = (req, res) => {
    console.log('update');
    res.send('update');
}

exports.delete = (req, res) => {
    console.log('delete');
    res.send('delete');
}