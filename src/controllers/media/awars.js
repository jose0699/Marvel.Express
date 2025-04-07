import { awars } from '../../models/media/awars.js';
import { video_games } from '../../models/media/video_games.js';

export class awars_methods {
    async insert_awars (req, res){  
        try{
            const  {
                name_awards, description_awards, fk_video_games_awards
            } = req.body;
    
            const new_awars = await awars.create({
                name_awards, description_awards, fk_video_games_awards
            });
            res.status(201).json(new_awars);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    };

    async get_all_awars (req, res){
        try{
            const { id } = parseInt(req.params.id , 10) || 0;

            if (isNaN(id) || id <= 0    || !id) {
                return res.status(400).json({ message: 'Invalid ID' });
            }

            const all_awars = await awars.findAll({
                where: { fk_video_games_awars: id },
                attributes: ["id_awars", "name", "description"],
                include: [{
                    model: video_games,
                    attributes: ["category", "publisher"]
                }]
            });
            res.status(200).json(all_awars);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    };

    async delete_awars (req, res){
        try{
            const { id } = parseInt(req.params.id , 10) || 0;

            if (isNaN(id) || id <= 0    || !id) {
                return res.status(400).json({ message: 'Invalid ID' });
            }

            const delete_awars = await awars.destroy({
                where: { id_awars: id }
            });

            if (delete_awars === 0) {
                return res.status(200).json({ message: 'award does not exist' });
            }

            res.status(200).json({ message: 'Award deleted successfully' });
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    }
}

export default new awars_methods();