exports.location = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
      throw new Error("please fill the details");
    }
    const API = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
    const resp = await fetch(API);
    const data = await resp.json();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
      message: error?.message,
    });
  }
};
