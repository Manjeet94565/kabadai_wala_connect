function ok(res, data, message, status = 200) {
  return res.status(status).json({ success: true, data, message });
}

function fail(res, status, message, code) {
  return res.status(status).json({ success: false, message, code });
}

module.exports = { ok, fail };
