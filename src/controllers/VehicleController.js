export function list(req,res) {return res.json([])};

export function show(req,res) {return res.json({id: req.params.id})};

export function create(req,res) {return res.json({})};

export function update(req,res) {return res.json({id: req.params.id})};

export function remove(req,res) {return res.json({})};

