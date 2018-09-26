<template>

    <div class="uk-grid pk-grid-large pk-width-sidebar-large" data-uk-grid-margin>
        <div class="pk-width-content uk-form-stacked">

            <div class="uk-form-row">

                <input class="uk-width-1-1 uk-form-large" type="text" name="title" :placeholder="'Enter Title' | trans" v-model="widget.title" v-validate:required>
                <p class="uk-form-help-block uk-text-danger" v-show="form.title.invalid">{{ 'Title cannot be blank.' | trans }}</p>

            </div>

            <div class="uk-form-row">
                <v-editor :value.sync="widget.data.content" :options="{markdown : widget.data.markdown}"></v-editor>
                <p>
                    <label><input type="checkbox" v-model="widget.data.markdown"> {{ 'Enable Markdown' | trans }}</label>
                </p>
            </div>

        </div>
        <div class="pk-width-sidebar">

            <div class="uk-panel uk-form-stacked">

                <div class="uk-form-row">
                    <label for="form-status" class="uk-form-label">{{ 'Status' | trans }}</label>
                    <div class="uk-form-controls">
                        <select id="form-status" class="uk-width-1-1" v-model="widget.status">
                            <option value="0">{{ 'Disabled' | trans }}</option>
                            <option value="1">{{ 'Enabled' | trans }}</option>
                        </select>
                    </div>
                </div>
                <div class="uk-form-row">
                    <label for="form-position" class="uk-form-label">{{ 'Position' | trans }}</label>
                    <div class="uk-form-controls">
                        <select id="form-position" name="position" class="uk-width-1-1" v-model="widget.position">
                            <option value="">{{ '- Assign -' | trans }}</option>
                            <option v-for="position in config.positions" :value="position.name">{{ position.label }}</option>
                        </select>
                    </div>
                </div>

                <div class="uk-margin" v-if="widget.position != 'navbar' && widget.position != 'offcanvas-top' && widget.position != 'offcanvas-bottom'">

                    <div class="uk-form-row">
                        <div class="uk-form-controls">
                            <label><input type="checkbox" v-model="widget.theme.title.hide"> {{ 'Hide Title' | trans }}</label>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label class="uk-form-label">{{ 'Title Color'  | trans}}</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1" v-model="widget.theme.title.color">
                                <option value="">Default</option>
                                <option value="uk-text-muted">Muted</option>
                                <option value="uk-text-primary">Primary</option>
                                <option value="uk-text-success">Success</option>
                                <option value="uk-text-warning">Warning</option>
                                <option value="uk-text-danger">Danger</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label class="uk-form-label">{{ 'Title Size'  | trans}}</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1" v-model="widget.theme.title.size">
                                <option value="">Default</option>
                                <option value="uk-h1">H1</option>
                                <option value="uk-h2">H2</option>
                                <option value="uk-h3">H3</option>
                                <option value="uk-h4">H4</option>
                                <option value="uk-h5">H5</option>
                                <option value="uk-h6">H6</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label class="uk-form-label">{{'Title Class' | trans}}</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1" v-model="widget.theme.title.otherClass">
                        </div>
                    </div>

                </div>

                <div class="uk-form-row" v-if="widget.position == 'sidebar'">

                    <div class="uk-form-row">
                        <label class="uk-form-label">{{'Card Background' | trans}}</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1" v-model="widget.theme.card.background">
                                <option value="uk-card uk-card-default">Default</option>
                                <option value="uk-card uk-card-primary">Primary</option>
                                <option value="uk-card uk-card-secondary">Secondary</option>
                                <option value="uk-card uk-card-muted">Muted</option>
                                <option value="uk-card">Blank</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label class="uk-form-label">{{'Size' | trans}}</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1" v-model="widget.theme.card.size">
                                <option value="uk-card-body">Default</option>
                                <option value="uk-card-body uk-card-small">Small</option>
                                <option value="uk-card-body uk-card-large">Large</option>
                                <option value="uk-padding-remove">Blank</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label class="uk-form-label">{{'Hover Shadow' | trans}}</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1" v-model="widget.theme.card.hover">
                                <option value="uk-card-hover">Active</option>
                                <option value="">None</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label class="uk-form-label">{{'Other Class' | trans}}</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1" v-model="widget.theme.card.otherClass">
                        </div>
                    </div>

                </div>

                <div class="uk-form-row" v-if="widget.position != 'sidebar' && widget.position != 'navbar' && widget.position != 'offcanvas-top' && widget.position != 'offcanvas-bottom'">

                    <div class="uk-form-row">
                        <label for="form-status" class="uk-form-label">{{ 'Section Background' | trans }}</label>
                        <div class="uk-form-controls">
                            <select class="uk-form-width-large" v-model="widget.theme.section.background">
                                <option value="">Default</option>
                                <option value="uk-section uk-section-primary">Primary</option>
                                <option value="uk-section uk-section-secondary">Secondary</option>
                                <option value="uk-section uk-section-default">Default</option>
                                <option value="uk-section uk-section-muted">Muted</option>
                                <option value="uk-section">Just Section</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label for="form-status" class="uk-form-label">{{ 'Content Size' | trans }}</label>
                        <div class="uk-form-controls">
                            <select class="uk-form-width-large" v-model="widget.theme.section.size">
                                <option value="">Default</option>
                                <option value="uk-section-xsmall">uk-section-xsmall</option>
                                <option value="uk-section-small">uk-section-small</option>
                                <option value="uk-section-large">uk-section-large</option>
                                <option value="uk-section-xlarge">uk-section-xlarge</option>
                                <option value="uk-padding-remove-vertical">uk-padding-remove-vertical</option>
                            </select>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label for="form-status" class="uk-form-label">{{ 'Image' | trans }}</label>
                        <div class="uk-form-controls">
                            <input-image :source.sync="widget.theme.section.image"></input-image>
                        </div>
                    </div>

                    <div class="uk-form-row">
                        <label for="form-status" class="uk-form-label">{{ 'Other Class' | trans }}</label>
                        <div class="uk-form-controls">
                            <input type="text" class="uk-width-1-1" v-model="widget.theme.section.otherClass">
                        </div>
                    </div>

                </div>

                <div class="uk-form-row">
                    <span class="uk-form-label">{{ 'Restrict Access' | trans }}</span>
                    <div class="uk-form-controls uk-form-controls-text">
                        <p v-for="role in config.roles" class="uk-form-controls-condensed">
                            <label><input type="checkbox" :value="role.id" v-model="widget.roles" number> {{ role.name }}</label>
                        </p>
                    </div>
                </div>

            </div>


        </div>
    </div>

</template>

<script>
module.exports = {
    section: {
        label: 'Settings'
    },

    props: ['widget', 'config', 'form'],

    created: function () {
        this.$options.partials = this.$parent.$options.partials;
    }
}
window.Widgets.components['system-text:settings'] = module.exports;
</script>
