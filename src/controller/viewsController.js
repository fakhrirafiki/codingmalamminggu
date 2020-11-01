const data = require('../data/data.json')


class ViewsController {
    static getIndexView = (req, res) => {
        res.render(
            'index',
            {
                data: data,
            }
        )
    }

    static getCreateView = (req, res) => {
        res.render(
            'create'
        )
    }

    static getEditView = (req, res) => {
        const { id } = req.params;
        const post = data.find((obj) => obj.id === parseInt(id, 10))

        if (!post) {
            return res.status(404).json({
                message: 'Ga ada datanya'
            })
        }

        res.render(
            'edit',
            {
                data: post,
            }
        )
    }
}

module.exports = ViewsController;