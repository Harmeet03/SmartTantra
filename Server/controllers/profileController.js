export const profile = async (req, res) => {
    let { _id, name, email, contact, since } = req.user

    try{
        return res.status(200).json({
            _id,
            name,
            email,
            contact,
            since,
            success: true
        })
    }
    catch(e){
        console.error('Error in fetching profile: ', e)

        return res.status(500).json({
            message: 'Error in fetching profile details!',
            success: false
        })
    }
}