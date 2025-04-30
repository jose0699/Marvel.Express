/*import media from '../../models/media/media.js';

class Media {

    async insert_media(req, res){
        try{
            const {
                premiere, company, tirtle, synopsis, category, saga
            } = req.body;

            const new_media = await media.create({
                premiere, company, tirtle, synopsis, category, saga
            });

            res.status(201).json(new_media);
        }catch(error){
            return res.status(500).json({
                message: 'Internal Server Error (' + error.message + ')'
            });
        }
    }


    async update_media(req, res){
        try{
            const permission = 2; 
            if(permission >= 2){
                const {
                    id_media, premiere, company, tirtle, synopsis, category, saga
                } = req.body;
    
                const [cross_media] = await media.Update(
                    { premiere, company, tirtle, synopsis, category, saga },
                    { where: { id_media } }
                )
    
                if (cross_media === 0) {
                    return res.status(400).json({ message: 'Media update failed' });
                }
    
                return res.status(200).json({ message: 'Media updated successfully' });
            } else {
                return res.status(403).json({ message: 'Permission denied'});
            }
        }catch(error){
            return res.status(500).json({
                messager: 'Internal server error (' + error.message + ')'
            })
        }
    }
};
export default new Media();*/