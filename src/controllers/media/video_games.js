import {video_games} from '../../models/media/video_games.js';
import { media } from '../../models/media/media.js';
import { where } from 'sequelize';

export class Video_Games_methods {
    async insert_video_games (req, res){  
        try{
            const  {
                category, publisher, fk_media_video_games
            } = req.body;
    
            const new_video_game = await video_games.create({
                category, publisher, fk_media_video_games
            });
            res.status(201).json(new_video_game);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    };
    
    async update_video_games (req, res){
        try{
            const id_video_games = parseInt(req.params.id, 10) || 0;

            if (isNaN(id_video_games || id_video_games <= 0)) {
                return res.status(400).json({ message: 'Invalid ID' });
            }

            const { category, publisher, fk_media_video_games } = req.body;    
            const video_game = await video_games.findByPk(id_video_games);
    
            if (!video_game) {
                return res.status(404).json({ message: 'Video game not found' });
            }
    
            await video_game.update({
                category, publisher, fk_media_video_games
            });
    
            res.status(200).json(video_game);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    }

    async get_video_games (req, res){
        try{
            const pag = parseInt(req.query.pag, 10) || 1;

            const video_game = await video_games.findAll({
                limit: 10,
                offset: (pag - 1) * 10,
                attributes: ["id_video_games", "category", "publisher"],
                order: [['created_at', 'DESC']],
                include: {
                    model: media,
                    attributes: ["tirtle"]
                }
            });
            res.status(200).json(video_game);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    };

    async get_video_game_by_id (req, res){
        try{
            const id_video_games = parseInt(req.params.id, 10) || 0;

            if (isNaN(id_video_games || id_video_games <= 0)) {
                return res.status(400).json({ message: 'Invalid ID' });
            }

            const video_game = await video_games.findByPk(id_video_games, {
                attributes: ["id_video_games", "category", "publisher"]
            });
    
            if (!video_game) {
                return res.status(404).json({ message: 'Video game not found' });
            }
    
            res.status(200).json(video_game);
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    };

    async delete_video_game (req, res){
        try{
            const { id }= parseInt(req.body.id , 10) || 0;

            if (isNaN(id || id <= 0 || !id)) {
                return res.status(400).json({ message: 'Invalid ID' });
            }

            const video_game = await video_games.findByPk(id_video_games);
    
            if (!video_game) {
                return res.status(404).json({ message: 'Video game not found' });
            }
    
            await video_game.destroy(
                where(
                    { id_video_games: id }
                ),
            );
    
            res.status(200).json({ message: 'Video game deleted successfully' });
        }catch (error) {
            return res.status(500).json({message: 'Internal Server Error'});
        }
    };
};
    export default new Video_Games_methods();