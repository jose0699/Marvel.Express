import { where } from "sequelize";
import { platforms } from "../../models/media/platforms";

export class platforms_methods {
    async insert_platforms (req, res){  
        try{
            const { description } = req.body;
            if (!description) {
                return res.status(400).json({ message: 'Description is required' });
            }
            const new_platform = await platforms.create({ description });
            res.status(201).json(new_platform);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    }

    async get_platforms (req, res){
        try{
            const pag = parseInt(req.params.pag, 10) || 1;

            const platforms_list = await platforms.findAll({
                limit: 10,
                offset: (pag - 1) * 10 ,
                order: [['id_platforms', 'ASC']],
                attributes: ["id_platforms", "description"]
            });
            res.status(200).json(platforms_list);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    };

    async update_platforms (req, res){
        try{
            const id = parseInt(req.params.id, 10) || 0;

            if (isNaN(id) || id <= 0 || id === null || id === undefined) {
                return res.status(400).json({ message: 'Invalid ID' });
            }

            const { description } = req.body;    
            const platform = await platforms.findByPk(id_platforms);

            if (!platform) {
                return res.status(404).json({ message: 'Platform not found' });
            }

            await platform.update({ description });

            res.status(200).json(platform);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    }

    async delete_platforms (req, res){
        try{
            const id = parseInt(req.params.id, 10) || 0;

            if (isNaN(id) || id <= 0 || id === null || id === undefined) {
                return res.status(400).json({ message: 'Invalid ID' });
            }

            const platform = await platforms.findByPk(id_platforms);

            if (!platform) {
                return res.status(404).json({ message: 'Platform not found' });
            }

            await platform.destroy({
                where: { id_platforms: id}
            });

            res.status(200).json({ message: 'Platform deleted successfully' });
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    }
};

export default new platforms_methods();