    const Offering = require("../model/offeringModel");


    exports.getOfferingsByType = async (req, res) => {
    try {
        const { type } = req.params;
        const offerings = await Offering.find({ type });
        res.json({ success: true, offerings });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
    };

    exports.saveOffering = async (req, res) => {
    try {
        const { id, type, title, content } = req.body;

        let offering;
        if (id) {
        offering = await Offering.findByIdAndUpdate(
            id,
            { title, content, type },
            { new: true }
        );
        } else {
        offering = new Offering({ type, title, content });
        await offering.save();
        }

        res.json({ success: true, message: "Offering saved", offering });
    } catch (err) {
        res.json({ success: false, message: err.message });
    }
    };

    exports.deleteOffering = async (req, res) => {
    try {
        const { id } = req.params;
        await Offering.findByIdAndDelete(id);
        res.json({ success: true, message: "Offering deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
    };
