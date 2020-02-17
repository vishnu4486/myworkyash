var category=require("../model/category.js");

exports.getCategories=(req,res,next)=>{
    category.find(function(err,category){
        if(err){
            res.json(err);
        }else{
            res.json(category);
        }
    })
};

exports.getCategory=(req,res,next)=>{
    category.findOne({"categoryId":req.params.categoryId},function(err,category){
        if(err){
            res.json(err);
        }else{
            res.json(category);
        }
    })
};

exports.addCategories=(req,res,next)=>{
    let newCategory=new category({
        categoryId:req.body.categoryId,
        categoryName: req.body.categoryName,
        created_At: new Date(),
        updated_At: new Date()
    });
    newCategory.save((err,item)=>{
        console.log(newCategory);
        if (err) {
            res.json(err);
        } else {
            res.json({msg:"category added successfully"});
        }
    })
    
};

exports.updateCategory = function (req, res,next) {
    category.findOneAndUpdate({
                "categoryId": req.params.categoryId
            }, {
                $set: {
                    categoryId: req.params.categoryId,
                    categoryName: req.body.categoryName,
                    created_At: new Date(),
                    updated_At: new Date()
                }
            }, function (err, category) {
        if (err) return next(err);
        res.send('Category udpated. '+[category.categoryId,category.categoryName]);
    });
};
// exports.updateCategory = function (req, res,next) {
//     category.findOneAndUpdate({"categoryId": req.params.categoryId}, {$set: req.body}, function (err, category) {
//         if (err) return next(err);
//         res.send('Category udpated. ');
//     });
// };


exports.deleteCategory = function (req, res,next) {
    category.deleteOne({"categoryId": req.params.categoryId}, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully! ');
    })
};

