return {
    title: resource.name || resource.id,
    description: resource.description || undefined,
    issued: resource.created, // TODO: handle time zone
    modified: resource.last_modified,
    license: dataset.license_title || undefined,
    accessURL: resource.webstore_url || undefined,
    downloadURL: resource.url || undefined,
    mediaType: resource.mimetype || undefined,
    format: resource.format || undefined
};
